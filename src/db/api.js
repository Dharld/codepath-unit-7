import supabase from "./index";

export const getAllMate = async () => {
  try {
    const { data, error } = await supabase.from("crewmate").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMate = async (id) => {
  try {
    const { data, error } = await supabase
      .from("crewmate")
      .select("*")
      .eq("id", id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createMate = async (mate) => {
  const { error } = await supabase.from("crewmate").insert(mate);
  if (error) {
    throw error;
  } else {
    console.log("Success");
  }
};

export const deleteMate = async (id) => {
  const { error } = await supabase.from("crewmate").delete().eq("id", id);
  if (error) {
    throw error;
  } else {
    console.log("Success");
  }
};

export const updateMate = async (id, mate) => {
  const { error } = await supabase.from("crewmate").update(mate).eq("id", id);
  if (error) {
    throw error;
  } else {
    console.log("Success");
  }
};
