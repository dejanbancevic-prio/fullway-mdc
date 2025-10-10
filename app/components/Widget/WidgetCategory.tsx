import {
  TireSizesDocument,
  TireSizesQuery,
  TireSizesQueryVariables,
} from "@lib/__generated__/graphql";
import { apolloClient } from "@lib/apollo";
import WidgetCategoryContent from "./WidgetCategoryContent";

const WidgetCategory = async () => {
  const { data } = await apolloClient.query<
    TireSizesQuery,
    TireSizesQueryVariables
  >({
    query: TireSizesDocument,
    variables: {},
  });

  return (
    <WidgetCategoryContent sectionWidth={data?.getTireSize?.section_widths} />
  );
};

export default WidgetCategory;
