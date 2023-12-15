namespace AJ.School.API.DomainModal.Root
{
    public class ApiResponse<T> where T : class
    {
        public ApiResponse() { }
        public List<T>? SuccessData { get; set; }
        public ErrorData? ErrorData { get; set; }
    }

    public class ApiResponse1<T> where T : class
    {
        public T? SuccessData { get; set; }
        public ErrorData? ErrorData { get; set; }
    }
}
