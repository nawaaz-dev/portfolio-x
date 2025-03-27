import { TabsEnum } from "@/page/home/home.types";
import { IPostCommon } from "@nawaaz-dev/portfolio-types";

const tabsPrecedence = [
  TabsEnum.Experience,
  TabsEnum.TechStack,
  TabsEnum.Project,
  TabsEnum.Education,
];

const tabsLabels = {
  [TabsEnum.Experience]: "Experience",
  [TabsEnum.TechStack]: "Tech Stack",
  [TabsEnum.Project]: "Project",
  [TabsEnum.Education]: "Education",
};

const postSchemaCommon: Record<
  keyof Omit<IPostCommon, "_id" | "details" | "createdAt">,
  {
    type: "string" | "object";
    required: boolean;
    defaultValue: string;
    title: string;
    // order: number;
  }
> = {
  tab: {
    type: "string",
    required: true,
    defaultValue: "",
    title: "Tab",
  },
  order: {
    type: "string",
    required: true,
    defaultValue: "",
    title: "Order",
  },
  title: {
    type: "string",
    required: true,
    defaultValue: "",
    title: "Title",
  },
  image: {
    type: "string",
    required: true,
    defaultValue: "",
    title: "Image",
  },
  time: {
    type: "string",
    required: true,
    defaultValue: "",
    title: "Time",
  },
  actions: {
    type: "object",
    required: true,
    defaultValue: "",
    title: "",
  },
};

const postSchema: Record<
  TabsEnum,
  Record<
    string,
    {
      type: "string" | "object";
      required: boolean;
      defaultValue: string;
      title: string;
      isArray?: boolean;
    }
  >
> = {
  [TabsEnum.Experience]: {
    ...postSchemaCommon,
    company: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Company",
    },
    location: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Location",
    },
    roles: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Roles",
    },
  },
  [TabsEnum.TechStack]: {
    ...postSchemaCommon,
    specialties: {
      type: "string",
      required: true,
      defaultValue: "",
      isArray: true,
      title: "Specialties",
    },
  },
  [TabsEnum.Project]: {
    ...postSchemaCommon,
    role: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Role",
    },
    duration: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Duration",
    },
    techStack: {
      type: "string",
      required: true,
      defaultValue: "",
      isArray: true,
      title: "Tech Stack",
    },
    responsibilities: {
      type: "string",
      required: true,
      defaultValue: "",
      isArray: true,
      title: "Responsibilities",
    },
    images: {
      type: "string",
      required: true,
      defaultValue: "",
      isArray: true,
      title: "Images",
    },
  },
  [TabsEnum.Education]: {
    ...postSchemaCommon,
    degree: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Degree",
    },
    location: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Location",
    },
    institution: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Institution",
    },
    description: {
      type: "string",
      required: true,
      defaultValue: "",
      title: "Description",
    },
  },
};

const editPageConfig = {
  tabsPrecedence,
  tabsLabels,
  postSchema,
};

export default editPageConfig;
