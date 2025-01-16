import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Tarefas",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Importantes",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Finalizadas",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Incompletas",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;
