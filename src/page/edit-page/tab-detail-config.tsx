import { TabsEnum } from "@/types/common-types";
import { Box, Button, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";

type ExperienceDetailsTab = {
  company: string;
  location: string;
  roles: string[];
};

const Experience: FC<ExperienceDetailsTab> = ({
  company,
  location,
  roles: _roles,
}) => {
  const [roles, setRoles] = useState<string[]>(_roles);

  const addRole = () => {
    setRoles([...roles, ""]);
  };

  const removeRole = (index: number) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  return (
    <>
      <TextField label="Company" value={company} />
      <TextField label="Location" value={location} />
      <Stack gap={2}>
        {roles.map((role, index) => (
          <Box display={"flex"} alignItems={"center"} gap={2} key={index}>
            <TextField
              sx={{ flex: 1 }}
              label={`Role ${index + 1}`}
              value={role}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeRole(index)}
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={addRole}>
          Add Role
        </Button>
      </Stack>
    </>
  );
};

type TechStackDetailsTab = {
  specialties: string[];
};

const TechStack: FC<TechStackDetailsTab> = ({ specialties }) => {
  console.log(specialties);
  return (
    <>
      {specialties.map((specialty, index) => (
        <TextField
          key={index}
          label={`Specialty ${index + 1}`}
          value={specialty}
        />
      ))}
      <Button variant="contained" color="primary">
        Add Specialty
      </Button>
    </>
  );
};

type ProjectDetailsTab = {
  role: string;
  duration: string;
  techStack: string[];
  responsibilities: string[];
  images: string[];
};

const Project: FC<ProjectDetailsTab> = ({
  role,
  duration,
  techStack,
  responsibilities: _responsibilities,
  images: _images,
}) => {
  const [responsibilities, setResponsibilities] = useState<string[]>(
    _responsibilities || []
  );

  const [images, setImages] = useState<string[]>(_images || []);

  const addResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const removeResponsibility = (index: number) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const addImage = () => {
    setImages([...images, ""]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <>
      <TextField label="Role" value={role} />
      <TextField label="Duration" value={duration} />
      {techStack.map((tech, index) => (
        <TextField key={index} label={`Tech Stack ${index + 1}`} value={tech} />
      ))}
      <Stack gap={2}>
        {responsibilities.map((responsibility, index) => (
          <Box key={index} gap={2} display={"flex"} alignItems={"center"}>
            <TextField
              label={`Responsibility ${index + 1}`}
              value={responsibility}
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeResponsibility(index)}
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={addResponsibility}>
          Add Responsibility
        </Button>
      </Stack>
      <Stack gap={2}>
        {images.map((image, index) => (
          <Box display="flex" alignItems="center" key={index} gap={2}>
            <TextField
              key={index}
              label={`Image ${index + 1}`}
              value={image}
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeImage(index)}
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={addImage}>
          Add Image
        </Button>
      </Stack>
    </>
  );
};

type EducationDetailsTab = {
  name: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
};

const Education: FC<EducationDetailsTab> = ({
  name,
  institution,
  duration,
  location,
  description,
}) => {
  return (
    <>
      <TextField label="Name" value={name} />
      <TextField label="Institution" value={institution} />
      <TextField label="Duration" value={duration} />
      <TextField label="Location" value={location} />
      <TextField label="Description" value={description} />
    </>
  );
};

const TabDetailsConfig = {
  [TabsEnum.Experience]: Experience,
  [TabsEnum.TechStack]: TechStack,
  [TabsEnum.Project]: Project,
  [TabsEnum.Education]: Education,
};

export default TabDetailsConfig;
