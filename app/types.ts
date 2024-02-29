export interface Announcement {
  title: string;
}

export interface Holiday {
  name: string;
  date: string;
}

export interface TCellData {
  data: string | JSX.Element;
  className?: string;
  type?: string;
}

export interface videoDetails {
  title: string;
  desc: string;
  link: string;
  thumbnail: string;
}

export interface Document {
    name: string;
    download_link: string;
    month?: string;
    year: string;
}

export interface NavDetails {
  link: string;
  type?: string;
  name: string;
  dropdownItems?: Array<NavDetails>;
}

export interface Blog {
  title: string;
  body: string;
  created_on: string;
  read_time: string;
}