import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "./routers";
import {
  CreateAssessmentPayload,
  CreateAssessmentQuestionPayload,
  IGenericResponse,
  UpdateAssessmentPayload,
} from "../interfaces";
import { stringReplaceWithWhiteSpace } from "@/utils/actions";

interface AssessmentResponse {
  data: any[];
  message: string;
  status: string;
  statusCode: number;
  totalCount: number;
}

export const assessmentApi = createApi({
  reducerPath: "assessmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["assessmentsByProtocolId", "singleAssessmentById"],
  endpoints: (builder) => ({
    getAssessmentsByProtocolId: builder.query<
      AssessmentResponse,
      { protocolId: any }
    >({
      query: ({ protocolId }) =>
        `${API_ROUTES.FFETCH_SURVEY}?protocolId=${protocolId}`,
      providesTags: ["assessmentsByProtocolId"],
    }),
    getSingleAssessmentQuestionsById: builder.query<any, { assessmentId: any }>(
      {
        query: ({ assessmentId }) =>
          `${API_ROUTES.FETCH_SINGLE_SURVEY_QUESTIONS}?surveyId=${assessmentId}`,
        providesTags: ["singleAssessmentById"],
        transformResponse: (response: any) => {
          let allQuestions: any[] = [];
          if (response?.data?.length > 0) {
            response?.data?.map((question: any) => {
              allQuestions.push({
                createdAt: question?.createdAt,
                title: question?.title,
                questionOptionTypeData: question?.questionOptionTypeData,
                isActive: question?.isActive,
                surveyId: question?.surveyId,
                options: question?.options,
                label: question?.label,
                _id: question?._id,
              });
            });
            return {
              data: allQuestions,
            };
          } else {
            return {
              data: allQuestions,
            };
          }
        },
      }
    ),
    createAssessment: builder.mutation<
      IGenericResponse,
      CreateAssessmentPayload
    >({
      query: (body) => {
        return {
          url: API_ROUTES.CREATE_SURVEY,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["assessmentsByProtocolId"],
    }),
    updateAssessmentById: builder.mutation<
      IGenericResponse,
      { assessmentId: string; payload: UpdateAssessmentPayload }
    >({
      query: ({ assessmentId, payload }) => {
        return {
          url: `${API_ROUTES.UPDATE_SURVEY}/${assessmentId}`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["assessmentsByProtocolId"],
    }),
    getQuestionTypes: builder.query({
      query: () => `${API_ROUTES.FETCH_QUESTION_TYPES}`,
      transformResponse: (response: any) => {
        const questionTypes: any[] = [];
        if (response?.data?.length > 0) {
          response.data.map((questionType: any) => {
            questionTypes.push({
              label: questionType?.optiontype,
              value: questionType._id,
            });
          });
          return {
            data: questionTypes,
          };
        }
        return {
          data: questionTypes,
        };
      },
    }),
    createAssessmentQuestion: builder.mutation<
      IGenericResponse,
      { payload: CreateAssessmentQuestionPayload }
    >({
      query: ({ payload }) => {
        return {
          url: `${API_ROUTES.CREATE_SURVEY_QUESTION}`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["singleAssessmentById"],
    }),
    fetchEmojies: builder.query<any, void>({
      query: () => `${API_ROUTES.FETCH_EMOJIS}`,
      transformResponse: (response: any) => {
        const emojiData: any[] = [];
        if (response?.data?.length > 0) {
          response?.data?.map((emoji: any) => {
            emojiData.push({
              _id: emoji?._id,
              label: emoji?.emojiValue,
              value: stringReplaceWithWhiteSpace(emoji?.emojiValue, "_"),
            });
          });
          return {
            data: emojiData,
          };
        } else {
          return {
            data: emojiData,
          };
        }
      },
    }),
  }),
});

export const {
  useLazyGetAssessmentsByProtocolIdQuery,
  useCreateAssessmentMutation,
  useUpdateAssessmentByIdMutation,
  useGetQuestionTypesQuery,
  useCreateAssessmentQuestionMutation,
  useGetSingleAssessmentQuestionsByIdQuery,
  useFetchEmojiesQuery,
} = assessmentApi;
