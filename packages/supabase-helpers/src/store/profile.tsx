import { supabaseClient as supabase } from '../clients/supabase'

export const getProfileById = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)

  if(error)
    console.error(error)

  return data
}