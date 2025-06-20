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
