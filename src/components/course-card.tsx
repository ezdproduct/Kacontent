import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(course.price);

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <img src={course.imgSrc} alt={course.title} className="rounded-md object-cover w-full h-full" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle>{course.title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3">{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xl font-extrabold text-primary">{formattedPrice}</p>
        <Button>Đăng ký ngay</Button>
      </CardFooter>
    </Card>
  );
};