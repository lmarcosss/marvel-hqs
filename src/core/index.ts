import { IComics, IComicsAPI, ICreator } from '@types';

export function replaceToHttps(url: string) {
  return url.replace('http', 'https');
}

export function removeDuplicateComics(comics: IComics[]) {
  return comics.filter(
    (comic, index, self) =>
      index ===
      self.findIndex(t => t.id === comic.id && t.title === comic.title),
  );
}

function formatCreators(creators: ICreator[]) {
  let creatorsText = '';
  creators.forEach((creator, index) => {
    if (creators.length === 1 || index === 0) {
      creatorsText = creator.name;
    } else {
      creatorsText = `${creatorsText}, ${creator.name}`;
    }
  });

  return creatorsText;
}

export function formatComics(comics: IComicsAPI[]) {
  const formattedComics = comics.map(comic => {
    return {
      id: comic.id,
      image: comic.images[0]?.path
        ? replaceToHttps(`${comic.images[0].path}.${comic.images[0].extension}`)
        : replaceToHttps(
            `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          ),
      title: comic.title,
      thumbnail: replaceToHttps(
        `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      ),
      creators: formatCreators(comic.creators.items),
      pageCount: comic.pageCount,
    };
  });

  return formattedComics;
}
