import logger from '../../libs/logger';

export const parseJSON = (objectString: string) => {
  try {
    return JSON.parse(objectString);
  } catch (error: unknown) {
    logger.error(`parseJSON ${error}`);
    return objectString;
  }
};
