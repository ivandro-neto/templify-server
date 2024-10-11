import { client } from "../../database"

export const GetVariables = async (tempId: string) : Promise<IGetVariableResponse[]> =>{
  const currentTemplate = await client.template.findFirst({where:{ id : tempId }})

  if(!currentTemplate)
    throw new Error("Cannot find a template with this id.")

  return (await client.variable.findMany({where:{templateId: currentTemplate.id}})).map(v =>{
    return{
      id: v.id,
      key: v.key,
      value: v.value
    }
  });

}