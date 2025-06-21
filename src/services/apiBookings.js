import supabase from "./supabase";

export async function getBookings({ filter, sort }) {
  let query = supabase.from("bookings").select("*, rooms(*), guests(*)");

  if (filter !== null) query = query.eq(filter.field, filter.value);
  if (sort)
    query = query.order(sort.field, {
      ascending: sort.dir === "asc",
    });

  const { data, error } = await query;
  if (error) {
    throw new Error("Bookings error:", error.message);
  }

  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, rooms(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Bookings error:", error.message);
  }

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Bookings error:", error.message);
  }
  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    throw new Error("Bookings error:", error.message);
  }
  return data;
}
