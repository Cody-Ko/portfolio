<template>
    <!-- {{ skillsData.SkillsArray }} -->
    <div class ="skill-container" v-for="(items, index) in skillsData.SkillsArray" v-bind:key="items">
        <!-- <i class="fa-solid fa-circle-check"></i> -->
        <div id="skill-name">{{ skillsData.SkillsArray[index].name}}</div>

    </div>
</template>

<script>
import jsonData from "/skills.json"
export default{
data(){
    return{
        skillsData: jsonData
    }
}
}
</script>

<style>
.skill-container {
  width: 50%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  height: 46px;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 85%;
  /* margin: 10px; */
}

/* .fa-circle-check {
  height: 60%;
  margin: 0px 15px 0px 10px;
  color: rgb(96 165 250);
} */
</style>