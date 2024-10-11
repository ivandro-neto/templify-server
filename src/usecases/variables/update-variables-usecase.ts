import { client } from "../../database";

export const UpdateVariables = async (body: IUpdateVariableRequest, tempId: string, varId: string) => {
  const currentTemplate = await client.template.findFirst({
    where: { id: tempId },
  });

  if (!currentTemplate)
    throw new Error("Cannot find a template with this id.");

  const currentVar = await client.variable.findFirst({
    where: { id: varId },
  });

  if (!currentVar)
    throw new Error("Cannot find a variable with this id.");

  // Atualiza a variável usando os campos necessários no Prisma
  const updatedVariable = await client.variable.update({
    where: { id: varId }, // Use o identificador correto
    data: {
      key: body.key,
      value: body.value,
    },
  });

  return updatedVariable;
};
