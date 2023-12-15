using AJ.School.API.DomainModal.Root;

namespace AJ.School.API.Helper
{
    public static class ModelConverter<T> where T : class
    {
        public static ApiResponse<T> ResponseConverter(List<T>? res, string errorMessage ,ErrorType errorType)
        {
            if (res != null)
            {
                var apiResponseSuccess = new ApiResponse<T>()
                {
                    SuccessData = res,
                    ErrorData = null,
                };
                return apiResponseSuccess;
            }
            else
            {
                var apiResponseFailure = new ApiResponse<T>()
                {
                    SuccessData = null,
                    ErrorData = new ErrorData()
                    {
                        ErrorMessage = errorMessage,
                        ErrorType = errorType,
                    },
                };
                return apiResponseFailure;
            }
        }

        public static ApiResponse1<T> ResponseConverter(T? res, string errorMessage, ErrorType errorType)
        {
            if (res != null)
            {
                var apiResponseSuccess = new ApiResponse1<T>()
                {
                    SuccessData = res,
                    ErrorData = null,
                };
                return apiResponseSuccess;
            }
            else
            {
                var apiResponseFailure = new ApiResponse1<T>()
                {
                    SuccessData = null,
                    ErrorData = new ErrorData()
                    {
                        ErrorMessage = errorMessage,
                        ErrorType = errorType,
                    },
                };
                return apiResponseFailure;
            }
        }
    }
}
