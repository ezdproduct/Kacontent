import Link from "next/link";
import { Button } from "./ui/button";

interface Course {
  imgSrc: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(course.price);

  return (
    <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden group p-0.5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-card rounded-[15px] h-full flex flex-col">
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
            <p className="text-xl font-extrabold text-primary">{formattedPrice}</p>
            <Button>Đăng ký ngay</Button>
          </div>
        </div>
      </div>
    </div>
  );
};