interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};