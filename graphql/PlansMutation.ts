import { gql } from '@apollo/client';

export const PLANS_MUTATION = gql`
  mutation CreateGuestPlanResponse($input: GuestPlanInput!) {
    createGuestPlanResponse(input: $input)
  }
`;
