const API_KEY = process.env.REACT_APP_YT_API_KEY;

export const parseData = async (items: any[]) => {
  try {
    const videoIds: string[] = [];
    const channelIds: string[] = [];

    items.forEach(
      (item: { snippet: { channelId: string }; id: { videoId: string } }) => {
        videoIds.push(item.snippet.channelId);
        channelIds.push(item.id.videoId);
      }
    );
  } catch (err: any) {
    console.log(err.messsage);
  }
};
