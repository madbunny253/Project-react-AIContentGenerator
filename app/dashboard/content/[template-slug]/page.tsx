"use client";
import React, { useState } from 'react';
import FormSection from './_components/FormSection';
import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useContext } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/router';
import { UpdateCreateUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();
  const {totalUsage, setTotalUsage}=useContext(TotalUsageContext)
  const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreateUsageContext)

  const GenerateAIContent = async (formData: any) => {
    if(totalUsage>=10000)
    {
      console.log("Please Upgrade");
      return ;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    // Send the AI prompt and wait for response
    const result = await chatSession.sendMessage(finalAIPrompt);
    const aiResponse = await result?.response.text();  // Await AI response text

    setAiOutput(aiResponse);  // Set AI response in output section

    // Save AI output to database
    await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, aiResponse);
    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };

  // Corrected SaveInDb function with matching schema fields
  const SaveInDb = async (formData: string, slug: any, aiResponse: string) => {
    try {
      await db.insert(AIOutput).values({
        formData: formData,  // Ensure this is a string matching varchar
        templateSlug: slug,  // Required field, must match schema
        aiResponse: aiResponse,  // Text field, should match schema
        createdby: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),  // Date in string format
      });
      console.log('Data successfully inserted into AIOutput');
    } catch (error) {
      console.error('Error inserting into AIOutput:', error);
    }
  };

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft />Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
