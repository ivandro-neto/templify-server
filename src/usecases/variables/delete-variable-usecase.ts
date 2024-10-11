import { client } from "../../database";

export const DeleteVariable = async (varId: string, tempId: string) => {
  const currentTemplate = await client.template.findFirst({where:{ id : tempId }})

  if(!currentTemplate)
    throw new Error("Cannot find a template with this id.")

  const currentVar = await client.variable.findFirst({
    where: { id: varId },
  });

  if (!currentVar)
    throw new Error("Cannot find a variable with this id.");

  const deletedVariable = await client.variable.delete({where:{id: varId}});

  return {
    id: deletedVariable.id,
    key: deletedVariable.key
  }
}