using AJ.School.API.DomainModal.Base;
using System.Text.Json.Serialization;

namespace AJ.School.API.DomainModal
{
    public class AuthorDM : BaseDM<int>
    {
        public string Name { get; set; }
        [JsonIgnore]
        public HashSet<BookDM>? Books { get; set; }
    }
}
