import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData'),
    templateSlug:varchar('templateSlug').notNull(),
    aiResponse:text('aiResponse'),
    createdby: varchar('createdBy'),
    createdAt:varchar('createdAt')
})