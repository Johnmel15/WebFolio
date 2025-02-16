import { usePostMutation } from "../../../query/postMutation";
import { SendEmailArgs } from "../../../types/args";

const useContactMutation = () => {
  const post = usePostMutation();

  const sendEmail = async (variables: SendEmailArgs) => {
    return post.mutateAsync({
      endpoint: "/email/send-email",
      variables,
    });
  };

  return { sendEmail };
};

export default useContactMutation;
