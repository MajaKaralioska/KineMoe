import { ReactNode } from "react";

export interface MovieInt {
    id: string;
    title: string;
    description: string;
    image: string;
    release_date: string;
    country: string[]; 
    duration: string;
    category: string;
    genres: string[]; 
    director: string[]; 
    writers: string[]; 
    producers: string[]; 
    cast: string[]; 
    editing: string[]; 
    cinematography: string[]; 
    costume_design: string[]; 
    video: string;
    rating: number;
    reviews: {
      user_id: number;
      rating: number;
      comment: string;
    }[];
}
  
export interface KidsInt extends MovieInt { }

export interface SeriesInt extends MovieInt { }

export interface PodcastInt {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    video: string;
    rating: number;
    reviews: {
      user_id: number;
      rating: number;
      comment: string;
    }[];
}
  
export interface CategoriesInt {
  [key: string]: string;
        movies : string,
        series : string,
        podcatsts: string,
        kids: string,
}

export interface UserInt {
    id: string;
    username: string;
    email: string;
    password: string;
    type: string; 
    bio: string;
    interests: string[];
    tutorial: boolean;
    subscription_type: string;
    cultures: string;
    created_at: string;
    favuritesCategories: any[]; 
    favouriteMovies: (string | number)[]; 
    notifications: string;
    settings: string;
    profileImage: string;
  }
  
  export interface UsersInt {
    artists: UserInt[];
    viewers: UserInt[];
}
  
export interface GlobalState {
    movies: MovieInt[];
    kids: KidsInt[];
    series: SeriesInt[];
    podcasts: PodcastInt[];
    categories: CategoriesInt[];
    users: UserInt[];
    artists: Artist[];
    comments: Comment[];
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}
  
export interface ChildrenProps {
    children: ReactNode;
  }
  
  export interface Artist {
    id: string;
    name: string;
    image: string;
    type: string;
    bio: string;
    movies: string[];
    rewards: string;
  }
  
  export interface Comment {
    id?: string;
    userId: string;
    content: string;
    timestamp: string;
    replies?: Comment[];
    parentCommentId?: string;
  }
  
  


  