import { useNavigate } from "react-router-dom";
import { Button } from "@/presentation/components/ui/button";

export default function UnknownPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground">Page not found</p>
      <p className="text-center text-muted-foreground max-w-[500px]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button 
        onClick={() => navigate("/")}
        className="mt-4"
      >
        Go back home
      </Button>
    </div>
  );
}