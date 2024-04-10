export interface Courses {
  id: number;
  name: string;
  photo: string;
  money: number;
  teacher: {
    name: string;
    img: string;
  };
  student: number;
  star: number;
}

export interface CourseDetail {
  data: Array<Courses>;
}
