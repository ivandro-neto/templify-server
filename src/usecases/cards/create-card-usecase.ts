import { client } from "../../database";

export const CreateCard = async (body: ICreateCard, tempId: string) : Promise<ICreateCardResponse> =>{
  const currentTemplate = await client.template.findFirst({where:{ id : tempId }})

  if(!currentTemplate)
    throw new Error("Cannot find a template with this id.")

  const card = await client.card.create({
   data : {
    content: body.content,
    tag: body.tag,
    order: 0,
    templateId: currentTemplate.id,
   }
  })

  return {
    id: card.id,
    content: card.content,
    tag: card.tag,
    templateId: card.templateId
  }
}