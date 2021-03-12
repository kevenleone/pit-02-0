type Launch = {
  id: string;
  details: string;
  mission_name: string;
  launch_success: boolean;
  launch_date_utc: string;
  links: {
    flickr_images: string[];
    mission_patch: string;
    mission_patch_small: string;
  };
};

type LaunchResponse = {
  launches: Array<Launch>;
};

export type { Launch, LaunchResponse };
