import { client } from "../../database";

export const DeleteCard = async (cardId: string, tempId: string) => {
  const currentTemplate = await client.template.findFirst({where:{ id : tempId }})

  if(!currentTemplate)
    throw new Error("Cannot find a template with this id.")

  const currentCard = await client.card.findFirst({
    where: { id: cardId },
  });

  if (!currentCard)
    throw new Error("Cannot find a card with this id.");

  const deletedCard = await client.card.delete({where:{id: cardId}});

  return {
    id: deletedCard.id,
    content: deletedCard.content
  }
}