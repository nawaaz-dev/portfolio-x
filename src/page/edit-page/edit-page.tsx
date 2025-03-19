"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IPostCommon } from "@nawaaz-dev/portfolio-types";
import { FC, useState } from "react";
import { TabsEnum } from "@/types/common-types";
import tabsMock from "@/mock/tabs-mock";
import TabDetailsConfig from "./tab-detail-config";
import editPageConfig from "./edit-page.config";

type PostCommon = Omit<IPostCommon, "actions"> & {
  actions: Omit<IPostCommon["actions"], "comments"> & {
    comments: Array<Omit<IPostCommon["actions"]["comments"][0], "userInfo">>;
  };
};

const EditPage: FC = () => {
  const [posts, setPosts] = useState<PostCommon[]>(
    Object.values(tabsMock).flat()
  );

  const CategoryWisePostMap: Record<TabsEnum, PostCommon[]> = posts.reduce(
    (acc, post) => {
      const tab = post.tab as TabsEnum;
      if (acc[tab]) {
        acc[tab].push(post);
      } else {
        acc[tab] = [post];
      }
      return acc;
    },
    {} as Record<TabsEnum, PostCommon[]>
  );

  const addPost = (tab: TabsEnum) => {};

  return (
    <Stack gap={2}>
      {Object.entries(CategoryWisePostMap).map(([tab, posts]) => (
        <Accordion key={tab}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography variant="h5">
              {editPageConfig.tabsLabels[tab as TabsEnum]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap={2}>
              <Card sx={{ boxShadow: 3, width: "100%" }}>
                <Stack>
                  {posts.map((post) => (
                    <Stack key={post._id} p={2} gap={1}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={2}
                        // border={1}
                        borderRadius={1}
                        borderColor={"lightgrey"}
                        // p={2}
                      >
                        <TextField label="Title" value={post.title} />
                        <TextField label="Time" value={post.time} />
                      </Box>
                      <Stack>
                        <Typography variant="h6">Details</Typography>
                        <Stack gap={2}>
                          {(function () {
                            const Component = TabDetailsConfig[tab as TabsEnum];
                            console.log(tab, Component);
                            if (Component) {
                              return <Component {...post.details} />;
                            }
                            return <></>;
                          })()}
                        </Stack>
                      </Stack>
                      <Stack
                        // border={1}
                        borderRadius={1}
                        borderColor="lightgrey"
                        // p={2}
                      >
                        <Typography variant="h6">Actions</Typography>
                        <Stack>
                          <Box display="flex" alignItems="center" gap={2}>
                            <Typography variant="body1">
                              Likes: {post.actions.likes}
                            </Typography>
                            <Button>Reset</Button>
                          </Box>
                          <Box display="flex" alignItems="center" gap={2}>
                            <Typography variant="body1">
                              Shares: {post.actions.shares}
                            </Typography>
                            <Button>Reset</Button>
                          </Box>
                        </Stack>
                      </Stack>
                      <Stack
                        // border={1}
                        borderRadius={1}
                        borderColor={"lightgrey"}
                        // p={2}
                      >
                        <Typography variant="h6">Comments</Typography>
                        <Stack>
                          {post.actions.comments.map((comment) => (
                            <Stack key={comment._id}>
                              <Typography variant="body1">
                                {comment.text}
                              </Typography>
                              <Button>Delete</Button>
                              {/* <Typography variant="body1">{comment.timestamp}</Typography> */}
                            </Stack>
                          ))}
                        </Stack>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Card>
              <Button variant="contained" color="secondary" fullWidth>
                Add {editPageConfig.tabsLabels[tab as TabsEnum]} Post
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default EditPage;
