import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ErrorMessageProps {
  message: string;
  description: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  description,
}) => {
  return (
    <Card className="min-h-[250px] min-w-[300px]">
      <CardHeader>
        <CardTitle>{message}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ErrorMessage;
