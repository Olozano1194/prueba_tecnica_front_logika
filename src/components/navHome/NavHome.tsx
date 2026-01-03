import ListHome from "../List/ListHome";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const NavHome = () => {
  return (
    <TabGroup>
      <TabList className="flex gap-x-20 text-gray-500 font-semibold md:text-lg lg:text-xl">
        <Tab className="cursor-pointer outline-none data-selected:border-b-2 data-selected:border-violet-950 data-selected:text-violet-950">
          Categorias
        </Tab>
        <Tab className="cursor-pointer outline-none data-selected:border-b-2 data-selected:border-violet-950 data-selected:text-violet-950">
          Tipos
        </Tab>
        <Tab className="cursor-pointer outline-none data-selected:border-b-2 data-selected:border-violet-950 data-selected:text-violet-950">
          Filtros
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel className="mt-8">
          <ListHome />
        </TabPanel>
        <TabPanel className="w-full flex justify-center items-center text-2xl text-violet-950 font-bold">
          Tipos
        </TabPanel>
        <TabPanel className="w-full flex justify-center items-center text-2xl text-violet-950 font-bold">
          Filtros
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
export default NavHome;
