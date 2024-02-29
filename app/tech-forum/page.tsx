import PageTitle from "@/components/PageTitle";
import Layout from "@/components/layout";
import { blogs } from "../dummydata";
import { Blog } from "../types";

function BlogElement({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col items-start w-[600px]">
      <p className="uppercase text-xs text-muted-foreground">
        {blog.created_on} / {blog.read_time} read
      </p>
      <p className="text-xl text-foreground font-bold">{blog.title}</p>
      <p className="text-sm text-muted-foreground line-clamp-2 overflow-hidden text-ellipsis">
        {blog.body}
      </p>
    </div>
  );
}

export default function TechForum() {
  return (
    <Layout>
      <PageTitle title="Blogs" />
      <div className="h-[calc(100%-2rem)] w-full flex flex-col items-center space-y-14 overflow-y-auto">
        {blogs?.map((blog, index) => (
          <BlogElement key={"blog-" + index} blog={blog} />
        ))}
      </div>
    </Layout>
  );
}
