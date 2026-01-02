import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/user';
import { sendRegistrationEmail } from '@/lib/email'; 

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const { name, email, phone, department, year, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const newUser = new User({ name, email, phone, department, year, password });
    await newUser.save();

    await sendRegistrationEmail(email, name, phone, department);

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.log("Error during registration:", error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });   
  }
}
  