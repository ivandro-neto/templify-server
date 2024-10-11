import { client } from "../../database";

export const UpdateCard = async (body: IUpdateCardRequest, tempId: string, cardId: string) => {
  const currentTemplate = await client.template.findFirst({
    where: { id: tempId },
  });

  if (!currentTemplate)
    throw new Error("Cannot find a template with this id.");

  const currentCard = await client.card.findFirst({
    where: { id: cardId },
  });

  if (!currentCard)
    throw new Error("Cannot find a card with this id.");

  // Atualiza a variável usando os campos necessários no Prisma
  const updatedCard = await client.card.update({
    where: { id: cardId }, // Use o identificador correto
    data: {
      content: body.content,
      tag: body.tag,
      order : body.order
    },
  });

  return updatedCard;
};
