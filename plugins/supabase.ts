export default defineNuxtPlugin((nuxtApp) => {
    const supabase = useSupabaseClient()
  
    // Reactive state for user
    const user = ref(null);
  
    // Fetch the authenticated user
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
        return null;
      }
      user.value = data.user;
      return data.user;
    };
  
    // Login method
    const loginUser = async (email, password) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        user.value = data.user;
        return data.user;
      } catch (error) {
        console.error('Error logging in:', error);
        return null;
      }
    };
  
    // Logout method
    const logoutUser = async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        user.value = null;
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };
  
    // Fetch data from a specific table
    const fetchData = async (table, filters = {}) => {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .match(filters);
        if (error) throw error;
        return data;
      } catch (error) {
        console.error(`Error fetching data from ${table}:`, error);
        return null;
      }
    };
  
    // Provide the Supabase methods and user state
    return {
      provide: {
        supa: {
          client: supabase,
          user,
          fetchUser,
          loginUser,
          logoutUser,
          fetchData,
        },
      },
    };
  });