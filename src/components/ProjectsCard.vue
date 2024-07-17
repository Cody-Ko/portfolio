<template>
    <div>
        {{ projectData }}
    </div>
</template>

<script>
import jsonData from "/projects.json"
export default{
data(){
    return{
        projectData: jsonData
    }
}
}
</script>

<style>
</style>