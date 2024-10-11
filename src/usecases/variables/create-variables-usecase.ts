import { client } from "../../database";

export const CreateVariables = async (body: ICreateVariable, tempId: string) : Promise<ICreateVariableResponse> =>{
  const currentTemplate = await client.template.findFirst({where:{ id : tempId }})

  if(!currentTemplate)
    throw new Error("Cannot find a template with this id.")

  const variable = await client.variable.create({
    data: {
      key: body.key,
      value: body.value,
      templateId: currentTemplate.id, 
    }
  })

  return {
    id: variable.id,
    key: variable.key,
    templateId: variable.templateId
  }
}