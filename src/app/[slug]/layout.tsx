type tamuProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(props: tamuProps) {
  const { params } = props;
  const formattedSlug = params.slug.replace(/-/g, " ");
  return {
    title: `Undangan Untuk ${formattedSlug}`,
    description: "Silahkan dibuka undangan tersebut, terimakasih",
  };
}
