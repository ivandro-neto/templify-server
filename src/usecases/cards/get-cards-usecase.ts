import { client } from "../../database"

export const GetCards = async (tempId: string) : Promise<IGetCardResponse[]> =>{
  const currentTemplate = await client.template.findFirst({where:{ id : tempId }})

  if(!currentTemplate)
    throw new Error("Cannot find a template with this id.")

  return (await client.card.findMany({where:{templateId: currentTemplate.id}})).map(card =>{
    return{
      id: card.id,
      content: card.content,
      tag: card.tag,
      order: card.order
    }
  });

}