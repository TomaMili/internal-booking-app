import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }
  return data;
}
export async function createEditRoom(newRoom, id) {
  const hasImgPath = newRoom.image?.startsWith?.(supabaseUrl);

  const imgName = `${Math.random()}-${newRoom.image.name}`.replaceAll("/", "");
  const imgPath = hasImgPath
    ? newRoom.image
    : `${supabaseUrl}/storage/v1/object/public/room-images//${imgName}`;

  let query = supabase.from("rooms");

  // CREATE ROOM
  if (!id) query = query.insert([{ ...newRoom, image: imgPath }]);

  // EDIT ROOM
  if (id) query = query.update({ ...newRoom, image: imgPath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Room could not be created");
  }

  if (hasImgPath) return data;

  const { error: bucketError } = await supabase.storage
    .from("room-images")
    .upload(imgName, newRoom.image);

  if (bucketError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    console.error(error);
    throw new Error("Room image could not be uploaded");
  }

  return data;
}

export async function deleteRoom(room) {
  const { data, error } = await supabase
    .from("rooms")
    .delete()
    .eq("id", room.id);

  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }

  const { error: deleteError } = await supabase.storage
    .from("room-images")
    .remove([room.image.split("/").pop()]);
  if (deleteError) {
    toast.error("We couldnt delete the image from the database");
  }
  return data;
}
