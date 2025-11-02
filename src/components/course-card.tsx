import Link from "next/link";
import { Button } from "./ui/button";

interface Course {
  imgSrc: string;
  title: string;
  description: string;
  price: string;
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col group">
      <Link href="#" className="block overflow-hidden">
        <img
          src={course.imgSrc}
          alt={`Ảnh bìa cho khóa học ${course.title}`}
          className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-foreground flex-grow">
          <Link href="#" className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {course.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-extrabold text-primary">{course.price}</p>
          <Button>Đăng ký ngay</Button>
        </div>
      </div>
    </div>
  );
};