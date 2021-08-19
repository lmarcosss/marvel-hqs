interface Image {
  path?: string;
  extension?: string;
}

export interface ICreator {
  name: string;
  resourceURI: string;
  role: string;
}

export interface ICreatorAPI {
  items: ICreator[];
}

export interface IMarvelComicsAPI {
  data: {
    results: IComicsAPI[];
  };
}

export interface IComicsAPI {
  id: number;
  title: string;
  images: Image[];
  thumbnail: Image;
  creators: ICreatorAPI;
  pageCount?: number;
  modified: string;
}

export interface IComics {
  id: number;
  title: string;
  image: string;
  thumbnail: string;
  creators?: string;
  pageCount?: number;
}
