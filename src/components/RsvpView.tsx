import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import app from "@/firebaseConfig";
import LoadingCircle from "./Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users } from "lucide-react";

type RSVPType = {
    name: string;
    email?: string;
    phone?: string;
    guest: number;
    message: string;
}

const RsvpView = () => {
  const [rsvpArray, setRsvpArray] = useState<RSVPType[] | undefined>();
  const [loading, setLoading] = useState(false);

  const fetchingData = async () => {
    setLoading(true);
    const db = getDatabase(app);
    const dbRef = ref(db, "wedding/rsvp");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {

        // const rsvpData = Object.values(snapshot.val()) as RSVPType[];
        // const sortedRsvpData = rsvpData.sort((a, b) => b.guest - a.guest); // Sorting by 'guest' in descending order
      const rsvpData = Object.values(snapshot.val()) as RSVPType[];
      const sortedRsvpData = rsvpData.reverse();
      setRsvpArray(sortedRsvpData);

    }
    setLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingCircle className="text-7xl" />
    </div>
  ) : (
    <div className="md:w-9/12 w-11/12 mx-auto my-16">
        <h1 className="mb-4 text-2xl font-semibold">Reservation List</h1>

        <div className=" flex flex-col gap-6">
      {rsvpArray?.map((item, index) => (
        <Card className="w-full shadow-xl " key={index}>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {item.email && <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{item.email}</span>
          </div>}
          {item.phone && <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{item.phone}</span>
          </div>}
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{item.guest == 1 ? item.guest + " Guest" : item.guest + " Guests" }</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {item.message}
          </p>
        </CardContent>
      </Card>
      ))}
    </div>
    </div>
  );
};

export default RsvpView;
