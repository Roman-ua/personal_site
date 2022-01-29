import {
  tech_stack_data_api,
  tech_stack_data_coding,
  tech_stack_data_dataBase,
  tech_stack_data_frameworks,
  tech_stack_data_task_management
} from "../constants/default_data";
import TechStackItem from "../components/homePage/techStack/techStackItem";

export const renderTechItem = (currentItem) => {
  switch (currentItem) {
    case 0:
      return tech_stack_data_coding.map((coding_item)=>{
        return (
          <TechStackItem abr={coding_item.abr} title={coding_item.title} />
        )
      })
    case 1:
      return tech_stack_data_frameworks.map((coding_item)=>{
        return (
          <TechStackItem abr={coding_item.abr} title={coding_item.title} />
        )
      })
    case 2:
      return tech_stack_data_api.map((coding_item)=>{
        return (
          <TechStackItem abr={coding_item.abr} title={coding_item.title} />
        )
      })
    case 3:
      return tech_stack_data_dataBase.map((coding_item)=>{
        return (
          <TechStackItem abr={coding_item.abr} title={coding_item.title} />
        )
      })
    case 4:
      return tech_stack_data_task_management.map((coding_item)=>{
        return (
          <TechStackItem abr={coding_item.abr} title={coding_item.title} />
        )
      })
  }
}
