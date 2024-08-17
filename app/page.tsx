import { ImageLoader } from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MoreHorizontal,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Twitter,
  UserPlus,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-md mx-auto overflow-hidden bg-background">
        <div className="relative h-48">
          <img
          // testing src
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-581mnXbEzDvY2yoWxWXRU5iMoSgg5g.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-16 left-4">
            <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
              <AvatarImage
              // testing src
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-aWV8tTX4ep44VIucVYRPVzIFKuPBuY.jpg"
                alt="Agustín Arias"
              />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <CardContent className="pt-20 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">Agustín Arias</h2>
              <p className="text-muted-foreground">Software Developer</p>
            </div>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span>Buenos Aires, Argentina</span>
          </div>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <Globe className="mr-1 h-4 w-4" />
            <a href="https://agustinarias.com" className="hover:underline">
              agustinarias.com
            </a>
          </div>
          <p className="mt-4">
            Passionate about creating innovative solutions and pushing the
            boundaries of technology. Always learning and exploring new
            frameworks and tools.
          </p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", "Next.js", "Minecraft"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                )
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex space-x-2">
            <Button size="icon" variant="ghost">
              <Github className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Connect
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
