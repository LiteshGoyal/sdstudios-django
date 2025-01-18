'use client'
import AddBlog from "@/components/Blogs/NewBlog";
import withAuth from '@/components/HOC';
function AddNewBlog() {
  return (
    <div>
      <AddBlog />
    </div>
  );
}
export default AddNewBlog