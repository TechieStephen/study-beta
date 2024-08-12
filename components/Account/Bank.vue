<script setup>
const { userData, updateUser, processing} = useAccount()
</script>


<template>
    <form @submit.prevent="">
        <div class="form-section">
            <div class="form-group">
                <label for="">Account NO.</label>
                <input v-model="userData.firstname" type="text" name="" id="">
            </div>

            <div class="form-group">
                <label for="">Bank</label>
                <input v-model="userData.lastname" type="text" name="" id="">
            </div>
        </div>
        
        <div class="form-group">
            <label for="">Account Name</label>
            <input v-model="userData.phoneNumber" disabled type="text" name="" id="">
        </div>

        <div class="mt-2 flex justify-end">
            <button type="submit" class="btn btn-primary flex justify-center align-items-center">
                <Processing :margin="true" v-if="processing"/>
                Submit
            </button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
form{
    margin: 20px 0px;
}
</style>