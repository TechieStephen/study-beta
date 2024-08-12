import { useAppStore } from "~/stores/app";

export default function useAccount() {
  const appStore = useAppStore(); // Call the function to get the store instance
  const {$toast, $post, $setUserAndToken} = useNuxtApp();
  const router = useRouter();
  const route = useRoute();

  const processing = ref(false); // Corrected spelling (should be 'processing')

  const userData = ref({...appStore?.user}); // Assuming user is an array
  // If user is an object, use spread syntax like: const userData = ref({ ...appStore?.user });

  const updateUser = () => {
    return new Promise(async (resolve, reject) => {
      processing.value = true;
      console.log('updateUser', userData.value);

      try {
        const user = await $post("url", userData.value);
        $setUserAndToken(user);

        $toast.success('You updated your profile!');
        processing.value = false;
        resolve();
      } catch (err) {
        processing.value = false;
        console.error('ERR: ', err);
        $toast.error(err);
        reject(err);
      }
    });
  };

  return { updateUser, userData, processing };
}
